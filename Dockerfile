FROM node:14-alpine as builder

ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr"
ENV NEXT_PUBLIC_MATOMO_SITE_ID="38"

COPY . .

RUN yarn --production --frozen-lockfile --prefer-offline && yarn cache clean

RUN yarn build
RUN yarn export

FROM ghcr.io/socialgouv/docker/nginx:6.65.0

USER 101

ENV PORT=3000

COPY --from=builder --chown=nginx:nginx /out /usr/share/nginx/html
