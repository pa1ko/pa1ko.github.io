# pkonarzewski.github.io

My snippets box

## Installation

### Python env

```bash
virtualenv .env
activate
pip install -r requirements.txt
nikola plugin -i localsearch
```

### Installation of snippets kernel

```bash
virtualenv .senv
activate
pip install -r snippets_requirements.txt
ipython kernel install --user --name snippetpy3 --display-name "Snippets (Py3)"
```

### Upgrading to newer version

```bash
pip install --upgrade -r requirements.txt
rm conf.py
nikola init
```

Go with default settings and then merge diff conf.py.

## Workflow

### Start server

`nikola`

### Create snippet

`nikola new_post`

### How to deploy

Auto deploy with Travis ci
`nikola`
