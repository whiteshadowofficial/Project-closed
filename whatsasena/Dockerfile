FROM fusuf/whatsasena:latest

RUN git clone https://github.com/sreezz-ai/UltraAlpha.git /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV REPO="https://sreezz-ai/UltraAlpha"
ENV TZ=Europe/Istanbul

RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["run.sh"]
