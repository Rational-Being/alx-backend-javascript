export default function loadBalancer(chinaDownload, USDOWNLOAD) {
  return Promise.race([chinaDownload, USDOWNLOAD])
    .then((response) => response);
}
