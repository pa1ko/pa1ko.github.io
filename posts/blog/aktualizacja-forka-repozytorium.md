<!--
.. title: Aktualizacja forka repozytorium
.. slug: aktualizacja-forka-repozytorium
.. date: 2020-10-23 17:30:11 UTC+02:00
.. tags: git
.. category: snippet
.. link:
.. description:
.. type: text
-->

Gdy chcemy zaktualizować nasz fork czyjegoś repozytorium.

Dodajemy do *remote* repozytorium na podstawie którego został stworzony fork.

```bash
git remote add upstream https://github.com/project/repo.git
```

Robimy pulla mastera z *upstream*, a potem rebase na naszym loklanym masterze.

```bash
git fetch upstream
git checkout master
git rebase upstream/master
```
