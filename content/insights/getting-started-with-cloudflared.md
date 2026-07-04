---
title: "Understanding Cloudflared: Reasons, Installation, and Basic Tunnel Configuration"
category: Cloudflare
tags: [cloudflared]
date: 2025-03-04 23:09
---

## What is Cloudflared?

Cloudflared is a command-line tool developed by Cloudflare that creates secure tunnels between your local infrastructure and the Cloudflare network without needing to open ports on your firewall. By using Cloudflared, you can expose local services to the internet safely through a Cloudflare Tunnel.

## Why Use Cloudflared?

Here are some key reasons to use Cloudflared:

- **Enhanced Security**: No need to open ports on your firewall, reducing the risk of external attacks.
- **Ease of Access**: Access local services through secure domains managed by Cloudflare.
- **Seamless Integration**: Leverage Cloudflare features like caching, DDoS protection, and traffic monitoring.
- **Automation and Management**: Easily manage tunnels and configurations via CLI commands.

## Installing Cloudflared

Follow these steps to install Cloudflared on a Linux-based system:

### 1. Download and Install

Download the latest Cloudflared binary and move it to a directory in your `PATH`:

```bash
# Download the latest release
curl -LO https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64

# Make it executable
chmod +x cloudflared-linux-amd64

# Move to /usr/local/bin for global access
sudo mv cloudflared-linux-amd64 /usr/local/bin/cloudflared

# Verify installation
cloudflared --version
```

### 2. Authenticate with Cloudflare

To link Cloudflared to your Cloudflare account, run the following:

```bash
cloudflared tunnel login
```

This will open a browser window prompting you to log in. If using a headless server, copy the provided URL and open it in your local browser.

## Creating and Configuring a Cloudflare Tunnel

### 1. Create a New Tunnel

Create a new tunnel named `example`:

```bash
cloudflared tunnel create example
```

After running the command, you’ll see output like this:

```bash
Tunnel credentials written to /root/.cloudflared/34c56f81-e6d9-40bf-b25e-c496964571fc.json
Created tunnel example with id 34c56f81-e6d9-40bf-b25e-c496964571fc
```

### 2. Configure Cloudflared

Create a configuration file at `~/.cloudflared/config.yml`:

```yaml
tunnel: 34c56f81-e6d9-40bf-b25e-c496964571fc
credentials-file: /root/.cloudflared/34c56f81-e6d9-40bf-b25e-c496964571fc.json
originRequest:
  connectTimeout: 30s

ingress:
  - hostname: blog.example.com
    service: http://localhost:80
```

### 3. Symlink the Config for Systemd

Cloudflared expects config files in standard directories like `/etc`. Let’s create a symlink:

```bash
sudo mkdir -p /etc/cloudflared
sudo ln -s /root/.cloudflared/config.yml /etc/cloudflared/config.yml
```

This keeps your original configuration secure in the root's home directory.

### 4. Set Up DNS for the Tunnel

Route your domain to the tunnel:

```bash
cloudflared tunnel route dns example blog.example.com
```

If there’s no DNS record yet, create one:

```bash
cloudflared tunnel dns create blog.example.com
```

### 5. Run Cloudflared as a Service

Create a new systemd service:

```bash
sudo nano /etc/systemd/system/cloudflared.service
```

Add the following configuration:

```ini
[Unit]
Description=Cloudflared Tunnel Service
After=network-online.target
Wants=network-online.target

[Service]
TimeoutStartSec=0
Type=notify
ExecStart=/usr/local/bin/cloudflared --no-autoupdate --config /etc/cloudflared/config.yml tunnel run
Restart=on-failure
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl enable cloudflared
sudo systemctl start cloudflared
```

To apply changes, restart the service:

```bash
sudo systemctl restart cloudflared
```

## Verifying the Setup

Once everything is configured, check if your service is accessible by visiting:

[https://blog.example.com](https://blog.example.com)

If the setup works, your local service should be live! If not, review the following:

- **Tunnel configuration** — ensure the correct tunnel ID and credentials are used.
- **DNS settings** — confirm DNS records are properly linked to the tunnel.
- **Logs** — check logs with:

```bash
journalctl -u cloudflared -f
```

## Conclusion

Congratulations! You've successfully:

- Installed Cloudflared.
- Created a secure tunnel.
- Configured DNS and systemd.
- Exposed a local service to the internet via Cloudflare.

In the next part of this series, we’ll explore more advanced topics such as load balancing, adding authentication, and securing SSH access with Cloudflared.

Stay tuned for more Cloudflare magic!

