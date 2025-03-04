---
title: "Understanding Cloudflared: Reasons, Installation, and Basic Tunnel Configuration"
date: 4-03-2025 23:09
category: Cloudflare
tags: [ cloudflared ]
---

### What is Cloudflared?

Cloudflared is a tool developed by Cloudflare that creates secure connections between local infrastructure and the Cloudflare network without opening ports on your firewall. By
using Cloudflared, you can connect local services to the internet through a Cloudflare Tunnel.

### Why Use Cloudflared?

Key reasons to use Cloudflared include:

- **Security**: No need to open ports on the firewall, reducing the risk of external attacks.
- **Ease of Access**: Access local services through secure domains managed by Cloudflare.
- **Integration with Cloudflare**: Benefit from Cloudflare features like caching, DDoS protection, and more.
- **Automation and Management**: Configuration can be automated via CLI commands, simplifying tunnel management.

### Installing Cloudflared

Here are the steps to install Cloudflared on a Linux-based system:

1. **Download and Install**
   You can download Cloudflared for your operating system from the official Cloudflare documentation:
   [Cloudflared Downloads](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/)

   For Linux, use the following commands:
   ```bash
   # Download the latest Cloudflared binary
   curl -LO https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64

   # Grant execute permissions
   chmod +x cloudflared-linux-amd64

   # Move the binary to a PATH directory
   sudo mv cloudflared-linux-amd64 /usr/local/bin/cloudflared

   # Verify the installation
   cloudflared --version
   ```

2. **Authenticate with Cloudflare**
   Run this command inside your server:
   ```bash
   cloudflared tunnel login
   ```
   This command will open a browser window and prompt you to log in to your Cloudflare account. If you are working on a headless server, you can copy the login URL and open it in
   your local browser.

### Creating a Tunnel

To create a new tunnel, use the following command:

```bash
cloudflared tunnel create example
```

This command will create a new tunnel named `example`. Cloudflared will generate a unique tunnel ID:

```bash
Tunnel credentials written to /root/.cloudflared/34c56f81-e6d9-40bf-b25e-c496964571fc.json. cloudflared chose this file based on where your origin certificate was found. Keep this file secret. To revoke these credentials, delete the tunnel.

Created tunnel example with id 34c56f81-e6d9-40bf-b25e-c496964571fc
```

### Connecting HTTP via Cloudflared

Now, let’s connect a local HTTP service (for example, a server running on port 80) through Cloudflared.

1. **Configuring Cloudflared**
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

2. **Creating a Symlink for Configuration**
   To allow systemd to access Cloudflared’s configuration, create a symlink from the configuration file to `/etc/cloudflared/`:

   ```bash
   sudo mkdir -p /etc/cloudflared
   sudo ln -s /root/.cloudflared/config.yml /etc/cloudflared/config.yml
   ```

   **Why create a symlink?**
   Systemd typically looks for configuration files in standard directories like `/etc`. Since Cloudflared stores its default configuration in `/root/.cloudflared/`, creating a
   symlink allows systemd to find the file without altering Cloudflared's default paths. This keeps the original configuration secure in the root's home directory.

3. **Configuring DNS for the Tunnel**

   Add DNS to route the domain to the tunnel:

   ```bash
   cloudflared tunnel route dns example blog.example.com
   ```

4. **Registering a Subdomain**

   If you haven’t created a DNS entry yet, do so now:

   ```bash
   cloudflared tunnel dns create blog.example.com
   ```

5. **Running Cloudflared as a Service (systemd)**
   Create a new service file:

   ```bash
   sudo nano /etc/systemd/system/cloudflared.service
   ```

   Add the following configuration:

   ```shell
   [Unit]
   Description=cloudflared
   After=network-online.target
   Wants=network-online.target

   [Service]
   TimeoutStartSec=0
   Type=notify
   ExecStart=/usr/bin/cloudflared --no-autoupdate --config /etc/cloudflared/config.yml tunnel run
   Restart=on-failure
   RestartSec=5s

   [Install]
   WantedBy=multi-user.target
   ```

   Enable, start, and restart the service:

   ```bash
   sudo systemctl enable cloudflared
   sudo systemctl start cloudflared
   sudo systemctl restart cloudflared
   ```


### Verifying the Setup

Once everything is configured, check if your service is accessible by visiting:

[blog.example.com](https://blog.example.com)

If the setup is correct, you should see your local service live. If not, double-check the tunnel configuration, DNS settings, and Cloudflared logs.

### Conclusion

Congratulations! You have successfully installed Cloudflared, created a tunnel, and connected a local HTTP service to a domain through Cloudflare.

This is just the beginning of our Cloudflared exploration. In the next series, we will dive into configuring load balancing, adding authentication, and security tips.

Stay tuned for the next post — we will also cover how to use Cloudflared for secure SSH access to your server!

See you in the next part of the series!
