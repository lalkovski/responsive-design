module.exports = ({
  wordpress: {
    baseUrl,
    protocol,
  }
}) => {
  if (!baseUrl && !protocol) {
    throw new Error(`Base URL and protocol variables missing`)
  }
}
