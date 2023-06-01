const apiEndpoint = 'https://langflow.cdn.prismic.io/api/v2';

const accessToken = 'MC5aSGloTEJFQUFDSUFmX0Zj.QO-_vRM5cFzvv73vv73vv70VQe-_vTjvv73vv71tLe-_vWQ6BEDvv73vv70FX3Lvv70j77-977-9XQ';

async function fetchPrismicDocuments() {
    const api = await Prismic.api(apiEndpoint, { accessToken });
    const response = await api.query(Prismic.Predicates.at('document.type', 'langflow'));
    return response.results;
  }

  module.exports = { fetchPrismicDocuments };

  