# Connect mindlab.solutions through Squarespace

1. In [GitHub Pages settings](https://github.com/jakerslam/Mindlab-Marketing/settings/pages), set Custom domain to `mindlab.solutions` and save before changing DNS.
2. In the Squarespace Domains dashboard, open mindlab.solutions → DNS → DNS settings. Replace only the Squarespace website A records and the old www CNAME. Keep email MX, SPF, DKIM, and other verification records.
3. Use these records, with the default TTL:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | jakerslam.github.io |

The CNAME target is a hostname without HTTPS or a repository path. The existing public DNS used Squarespace's four A addresses (198.185.159.144/145 and 198.49.23.144/145), plus www → ext-sq.squarespace.com.

4. After saving the custom domain in GitHub, use Actions → Deploy GitHub Pages → Run workflow. This rebuilds links and assets for the domain root instead of /Mindlab-Marketing/. The publisher preserves the CNAME setting.
5. Once GitHub's DNS check passes and its certificate is ready, enable Enforce HTTPS in Pages settings. DNS propagation and certificate availability can take time; GitHub notes up to 24 hours for each.

References: [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Squarespace DNS records](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records).
