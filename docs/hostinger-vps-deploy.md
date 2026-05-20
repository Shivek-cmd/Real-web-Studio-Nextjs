# Hostinger VPS Deployment

Production target:

- VPS: Ubuntu 24.04.4 LTS
- Runtime: Docker Compose
- Reverse proxy: existing Traefik container
- Domain: `realwebstudio.com`
- HTTPS resolver: `letsencrypt`
- Traefik network: `n8n-vat5_traefik-proxy`

## First Deploy

SSH into the VPS and place the app under `/docker`:

```bash
cd /docker
git clone https://github.com/Shivek-cmd/Real-web-Studio-Nextjs.git realwebstudio
cd realwebstudio
docker compose up -d --build
```

Check the container:

```bash
docker ps
docker logs realwebstudio-next --tail=100
```

Then visit:

- `https://realwebstudio.com`
- `https://www.realwebstudio.com`

The `www` domain is redirected to the apex domain by Traefik.

## Updates

```bash
cd /docker/realwebstudio
git pull
docker compose up -d --build
```

## Rollback

If a deploy fails, view logs first:

```bash
docker logs realwebstudio-next --tail=200
```

To stop only this app:

```bash
cd /docker/realwebstudio
docker compose down
```
