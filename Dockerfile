FROM nginx:1.27-alpine

# Remove the default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the pre-built SvelteKit static output (adapter-static writes to build/)
COPY build/ /usr/share/nginx/html

# Copy our custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
