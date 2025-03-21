FROM node:14-alpine as builder

WORKDIR /app

ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr"
ENV NEXT_PUBLIC_MATOMO_SITE_ID="38"

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable

COPY . .

RUN yarn build
RUN yarn export

FROM ghcr.io/socialgouv/docker/nginx:8.3.6
COPY --from=builder --chown=nginx:nginx /app/out /usr/share/nginx/html
