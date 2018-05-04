# pkonarzewski.github.io

My snippets box

## Installation

### Python env

```bash
virtualenv .venv
activate
pip install -r requirements.txt
```

### Installation of snippets kernel

```bash
virtualenv .svenv
activate
pip install -r snippets_requirements.txt
ipython kernel install --user --name snippetpy3 --display-name "Snippets (Py3)"
```
