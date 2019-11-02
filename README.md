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

1. Python kernel:

```bash
virtualenv .senv
activate
pip install -r snippets_requirements.txt
ipython kernel install --user --name snippets_py --display-name "snippets[py]"
```

### Upgrading to newer version

1. Run command

```bash
pip install --upgrade -r requirements.txt
mv conf.py conf_old.py
nikola init
```

2. Then use any diff tool on *conf.py* and *conf_old.py* and incorporate changes.

## Workflow

### Start server

`nikola build` then `nikola serve` or just use `nikola auto`.

### Create snippet

1. Run: `nikola new_post -f ipynb -t "{{ title }}" --tags={{section tag}}`
1. If there is new tag, name should be in english and in single form, also remember updating *pages/index.html*
1. Set snippet category to "*snippet*"
1. Run jupyter using *jupyter_start.bat*
1. Change jupyter kernel of snippet to "*snippets[{{ kernel language }}]*"

### How to deploy

Auto deploy set with Travis CI
`nikola github_deploy`
