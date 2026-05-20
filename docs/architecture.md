# RealWebStudio VPS Architecture

This project will run as a Dockerized Next.js application on the Hostinger VPS.
Traefik is already running on the VPS and will handle HTTPS, certificates, and routing.

## High-Level Setup

```mermaid
flowchart LR
  visitor[Website Visitor] --> browser[Browser]
  browser --> dns[Namecheap DNS]
  dns --> vps[Hostinger VPS<br/>187.124.229.161]
  vps --> traefik[Traefik<br/>Reverse Proxy]
  traefik --> app[RealWebStudio<br/>Next.js Docker Container]
```

Namecheap only tells browsers where the server is. The actual website runs on the Hostinger VPS.

## DNS

The domain owner should add these records in Namecheap if the domain uses Namecheap DNS:

```text
A  @    187.124.229.161
A  www  187.124.229.161
```

After DNS is active:

- `realwebstudio.com` points to the VPS.
- `www.realwebstudio.com` points to the VPS.
- Traefik receives both domains and redirects `www` to the main domain.

## Request Flow

```mermaid
sequenceDiagram
  participant User
  participant DNS as Namecheap DNS
  participant VPS as Hostinger VPS
  participant Traefik
  participant App as Next.js Container
  participant LE as Let's Encrypt

  User->>DNS: Open realwebstudio.com
  DNS-->>User: Return 187.124.229.161
  User->>VPS: HTTPS request
  VPS->>Traefik: Port 443 traffic
  Traefik->>LE: Request/renew SSL certificate when needed
  Traefik->>App: Forward request to port 3000
  App-->>Traefik: Rendered Next.js response
  Traefik-->>User: Secure HTTPS response
```

## Docker Container Layout

```mermaid
flowchart TB
  subgraph VPS[Hostinger VPS]
    subgraph ExistingStack[Existing Docker Stack]
      traefik[traefik-kl0a-traefik-1<br/>Traefik v3]
      n8n[n8n-vat5-n8n-1]
      mongo[mongodb-4-yr8o-mongodb4-1]
    end

    subgraph RealWebStudioStack[New RealWebStudio Stack]
      next[realwebstudio-next<br/>Next.js standalone server<br/>Port 3000]
    end

    network[n8n-vat5_traefik-proxy<br/>Docker network]
  end

  traefik --- network
  n8n --- network
  next --- network
  mongo -. separate db network .- n8n
```

Traefik watches Docker labels. The RealWebStudio container has labels telling Traefik:

- route `realwebstudio.com`
- route `www.realwebstudio.com`
- use HTTPS entrypoint `websecure`
- use certificate resolver `letsencrypt`
- send traffic to container port `3000`

## Deployment Flow

```mermaid
flowchart LR
  local[Local Project] --> commit[Git Commit]
  commit --> github[GitHub Repository]
  github --> pull[VPS git pull / clone]
  pull --> build[docker compose up -d --build]
  build --> image[Docker Image]
  image --> container[realwebstudio-next Container]
  container --> traefik[Traefik Routes Domain]
```

First deploy:

```bash
cd /docker
git clone https://github.com/Shivek-cmd/Real-web-Studio-Nextjs.git realwebstudio
cd realwebstudio
docker compose up -d --build
```

Future updates:

```bash
cd /docker/realwebstudio
git pull
docker compose up -d --build
```

## Build Flow Inside Docker

```mermaid
flowchart TB
  source[Source Code] --> deps[npm ci]
  deps --> build[next build]
  build --> standalone[.next/standalone]
  build --> static[.next/static]
  build --> public[public assets]
  standalone --> runner[Small Production Image]
  static --> runner
  public --> runner
  runner --> start[node server.js]
```

The app uses Next.js `output: "standalone"`, which creates a smaller production server bundle.
The final container does not run `npm run dev`; it runs:

```bash
node server.js
```

## Current Production Files

- `Dockerfile`: builds the Next.js production image.
- `.dockerignore`: keeps unnecessary files out of Docker builds.
- `docker-compose.yml`: starts the app and connects it to Traefik.
- `next.config.ts`: enables Next standalone output.
- `docs/hostinger-vps-deploy.md`: command checklist for deployment.

## Operational Checks

Check running containers:

```bash
docker ps
```

Check app logs:

```bash
docker logs realwebstudio-next --tail=100
```

Restart the app:

```bash
cd /docker/realwebstudio
docker compose restart
```

Stop only this website:

```bash
cd /docker/realwebstudio
docker compose down
```

## Important Notes

- DNS must point to `187.124.229.161` before HTTPS can work correctly.
- Traefik handles SSL certificates automatically through Let's Encrypt.
- The existing n8n and MongoDB containers should not be changed for this website deploy.
- The website container only needs access to the Traefik proxy network.
- `www.realwebstudio.com` redirects to `realwebstudio.com`.
