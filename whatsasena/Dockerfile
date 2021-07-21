FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ThevinduWA/kyouko.git /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV REPO="https://ThevinduHansara/KyoukoBot"
ENV TZ=Europe/Istanbul

RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
