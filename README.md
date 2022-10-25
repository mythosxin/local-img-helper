A tool to help you view local pictures.

## Usage

```
yarn add local-img-helper --dev
```

you can use `yarn static-check --path=src` in your terminal or add a command in `scripts` of file "package.json".

```
{
  "scripts": {
    "img": "yarn static-check --path=src"
  }
}
```

## Params

-   path: string

your files path, `--path` is required.


## Note

Folders with `. or node_modules or dist` in the name are automatically skipped.