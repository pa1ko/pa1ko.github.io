<!--
.. title: Instalowanie nowych kerneli dla Jupytera
.. slug: instalowanie-ipython-kernel-dla-jupytera
.. date: 2019-10-19 17:18:55 UTC+02:00
.. tags: jupyter
.. category: snippet
.. link:
.. description:
.. type: text
-->

Instalowanie IPyhon kernel dla Jupytera:

1. `source activate .env`
1. `pip install ipykernel`
2. `python -m ipykernel install --user --name {{nazwa_kernela}} --display-name "{{Ładna nazwa}}"`
