# CSV Loader

The `CSVLoader` loads a CSV file into a list of documents.

Learn more about the CSV Loader [here](https://python.langchain.com/en/latest/modules/indexes/document_loaders/examples/csv.html?highlight=CSV%20loader).


### ⛓️LangFlow example

![CSV Loader](img/csv-loader.png)

[Download CSV](data/organizations-100.csv)

`CharacterTextSplitter` implements splitting text based on characters.

Text splitters operate as follows:

- Split the text into small, meaningful chunks (usually sentences).

- Combine these small chunks into larger ones until they reach a certain size (measured by a function).

- Once a chunk reaches the desired size, make it its piece of text and create a new chunk with some overlap to maintain context.

*Separator*:

```txt
.
```

*Chunk size*:

```txt
4000
```

*Chunk overlap*:

```txt
200
```

The `OpenAIEmbeddings`, wrapper around [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings) models. Make sure to get the API key from the LLM provider, in this case [OpenAI](https://platform.openai.com/).

`Chroma` vector databases can be used as vector stores to conduct a semantic search or to select examples, thanks to a wrapper around them.

A `VectorStoreInfo` set information about the vector store, such as the name and description.

*Name*:

```txt
Top 100 companies
```

*Description*:

```txt
The file contains top 100 companies.
```

The `VectoStoreAgent` is an agent designed to retrieve information from one or more vector stores, either with or without sources.

For this example, we used [`OpenAI`](https://platform.openai.com/) as the LLM.