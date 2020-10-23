var tipuesearch = {
  "pages": [
    {
      "title": "Aktualizacja forka repozytorium",
      "text": "Gdy chcemy zaktualizowa\u0107 nasz fork czyjego\u015b repozytorium.\nDodajemy do remote repozytorium na podstawie kt\u00f3rego zosta\u0142 stworzony fork.\ngit remote add upstream https://github.com/project/repo.git\n\n\nRobimy pulla mastera z upstream, a potem rebase na naszym loklanym masterze.\ngit fetch upstream\ngit checkout master\ngit rebase upstream/master",
      "tags": "git",
      "url": "https://pkonarzewski.github.io/blog/aktualizacja-forka-repozytorium/"
    },
    {
      "title": "Normalizacja kolumn w Pandas",
      "text": "In\u00a0[2]:\n\n    \nimport pandas as pd\n\n\n    \n\n\n\n\n\n\n\nMoja metoda na normalizowanie nazw kolumn, szczeg\u00f3lnie przydaje si\u0119 przy imporcie za\u015bmieconych Exceli.\n\n\n\n\n\n\nIn\u00a0[3]:\n\n    \nPL_DIACRITCS = [\n    (\"\u0105\", \"a\"),\n    (\"\u0107\", \"c\"),\n    (\"\u0119\", \"e\"),\n    (\"\u0142\", \"l\"),\n    (\"\u0144\", \"n\"),\n    (\"\u00f3\", \"o\"),\n    (\"\u015b\", \"s\"),\n    (\"\u017a\", \"z\"),\n    (\"\u017c\", \"z\"),\n]\n\nSPEC_CHARS = [x for x in \".,()'\\\"_-:\\\\,/!@#$%&*+=[]|\"]\n\n\ndef col_name_norm(cname: str, connector: str = \"_\") -> str:\n    ncol = cname.strip().lower()\n\n    for from_rep, to_repr in PL_DIACRITCS:\n        ncol = ncol.replace(from_rep, to_repr)\n\n    for from_rep in SPEC_CHARS:\n        ncol = ncol.replace(from_rep, \" \")\n\n    ncol = connector.join(ncol.split())\n\n    ncol = \"_\" if ncol == \"\" else ncol\n\n    return ncol\n\n\n    \n\n\n\n\n\n\n\nPrzyk\u0142ad u\u017cycia\n\n\n\n\n\n\nIn\u00a0[4]:\n\n    \ndf = pd.DataFrame([],columns=[\"SdF\", \"[[\u015b\u0105\u0107\u0105C\u0106S\u0118-_)\", \"   Teskty i   inne\", \"@$@%\"])\ndf\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[4]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      SdF\n      [[\u015b\u0105\u0107\u0105C\u0106S\u0118-_)\n      Teskty i   inne\n      @$@%\n    \n  \n  \n  \n\n\n\n\n\n\n\n\n\n\n\n\nIn\u00a0[5]:\n\n    \ndf.columns = [col_name_norm(x) for x in df.columns]\ndf\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[5]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      sdf\n      sacaccse\n      teskty_i_inne\n      _",
      "tags": "pandas",
      "url": "https://pkonarzewski.github.io/blog/normalizacja-kolumn-w-pandas/"
    },
    {
      "title": "Znajdywanie i zabijanie kwerend w Postgresie",
      "text": "Znajdywanie aktywnych kwerend:\nSELECT * FROM pg_stat_activity WHERE state = 'active';\nMaj\u0105c PID z poprzedniej kwerendy, mo\u017cemy zabi\u0107 kwerend\u0119:\nSELECT pg_cancel_backend(PID);\nPowy\u017csza operacja mo\u017ce chwil\u0119 potrwa\u0107, je\u017celi chcemy to zrobi\u0107 brutalnie to:\nSELECT pg_terminate_backend(PID);",
      "tags": "postgres",
      "url": "https://pkonarzewski.github.io/blog/znajdywanie-zabijanie-kwerend-postgres/"
    },
    {
      "title": "F-string",
      "text": "Nowa funkcjonalno\u015b\u0107 dodana w Pythonie 3.6, f-string jest nowym sposobem interpolacji string\u00f3w. U\u017cywa si\u0119 go przez dodanie f'' przed stringiem.\n\n\n\n\n\n\nIn\u00a0[14]:\n\n    \nname = 'Yukka'\nage = 56\n\nprint('Hello {name}, age: {age}')\nprint(f'Hello {name}, age: {age}')\n\n\n    \n\n\n\n\n\n\n\n\n\n    \n\n\n\nHello {name}, age: {age}\nHello Yukko, age: 56\n\n\n\n\n\n\n\n\n\n\n\nWewn\u0105trz f-string'a mo\u017cna umieszcza\u0107 wyra\u017cenia, kt\u00f3re b\u0119d\u0105 ewaluowane w czasie wywy\u0142ywania kod.\n\n\n\n\n\n\nIn\u00a0[9]:\n\n    \nf'{13 * 5}'\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[9]:\n\n\n\n\n\n'65'\n\n\n\n\n\n\n\n\n\n\nIn\u00a0[16]:\n\n    \ndef reverse(text):\n    return ''.join(reversed(text))\n\nf'{reverse(name)} olleH'\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[16]:\n\n\n\n\n\n'okkuY olleH'\n\n\n\n\n\n\n\n\n\n\nIn\u00a0[22]:\n\n    \ntext = (\n    f'Hello {name} '\n    f'your age is: {age}'\n)\n\ntext\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[22]:\n\n\n\n\n\n'Hello Yukko your age is: 56'",
      "tags": "python-basics",
      "url": "https://pkonarzewski.github.io/blog/f-string/"
    },
    {
      "title": "Wy\u015bwietl typ element\u00f3w DataFrame",
      "text": "Spos\u00f3b na wy\u015bwietlenie typ\u00f3w wszystkich element\u00f3w DataFrame'a.\n\n\n\n\n\n\nIn\u00a0[10]:\n\n    \nimport pandas as pd\ndf = pd.DataFrame([\n    [1,'a', 2.3],\n    [2, 'b', 0.1],\n    ['3', 'c', 11]\n], columns=['a', 'b', 'c'])\ndf\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[10]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      a\n      b\n      c\n    \n  \n  \n    \n      0\n      1\n      a\n      2.3\n    \n    \n      1\n      2\n      b\n      0.1\n    \n    \n      2\n      3\n      c\n      11.0\n    \n  \n\n\n\n\n\n\n\n\n\n\n\n\nIn\u00a0[9]:\n\n    \ndf.applymap(lambda x: type(x).__name__)\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[9]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      a\n      b\n      c\n    \n  \n  \n    \n      0\n      int\n      str\n      float\n    \n    \n      1\n      int\n      str\n      float\n    \n    \n      2\n      str\n      str\n      float",
      "tags": "pandas",
      "url": "https://pkonarzewski.github.io/blog/wyswietl-typ-elementow-dataframe/"
    },
    {
      "title": "Uzupe\u0142nianie brak\u00f3w w zakresie dat",
      "text": "Uzupe\u0142nianie brak\u00f3w w datach\n\n\n\n\n\n\nIn\u00a0[1]:\n\n    \nfrom datetime import datetime\nimport pandas as pd\n\n\n    \n\n\n\n\n\n\nIn\u00a0[4]:\n\n    \ndf = pd.DataFrame(\n    [\n        [datetime(2019, 1, 1), 1, 'a'],\n        [datetime(2019, 1, 4), 1, 'b'],\n        [datetime(2019, 2, 1), 1, 'a'],\n        [datetime(2019, 4, 1), 1, 'b'],\n    ]\n,columns=['dttm', 'value', 'flag'])\n\ndf.head()\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[4]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      dttm\n      value\n      flag\n    \n  \n  \n    \n      0\n      2019-01-01\n      1\n      a\n    \n    \n      1\n      2019-01-04\n      1\n      b\n    \n    \n      2\n      2019-02-01\n      1\n      a\n    \n    \n      3\n      2019-04-01\n      1\n      b\n    \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\nDla zwyk\u0142ego grupowania wystarczy skorzysta\u0107 z klasy Grouper\n\n\n\n\n\n\nIn\u00a0[5]:\n\n    \ndf.groupby(pd.Grouper(key='dttm', freq='MS')).sum()\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[5]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      value\n    \n    \n      dttm\n      \n    \n  \n  \n    \n      2019-01-01\n      2\n    \n    \n      2019-02-01\n      1\n    \n    \n      2019-03-01\n      0\n    \n    \n      2019-04-01\n      1\n    \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\nZe wzgl\u0119du na b\u0142\u0105d Pandas link Grouper w pivot_table pomija nie wyst\u0119puj\u0105ce zakresy.\n\n\n\n\n\n\nIn\u00a0[19]:\n\n    \ndf.pivot_table(index=pd.Grouper(key='dttm', freq='M'), columns='flag', fill_value=0)\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[19]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead tr th {\n        text-align: left;\n    }\n\n    .dataframe thead tr:last-of-type th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      value\n    \n    \n      flag\n      a\n      b\n    \n    \n      dttm\n      \n      \n    \n  \n  \n    \n      2019-01-31\n      1\n      1\n    \n    \n      2019-02-28\n      1\n      0\n    \n    \n      2019-04-30\n      0\n      1\n    \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\nNaprawi\u0107 mo\u017cna to, po zrobieniu pivota, wykona\u0107 reindex na indeksach / kolumnach\n\n\n\n\n\n\nIn\u00a0[29]:\n\n    \ndate_range = pd.date_range(start=datetime(2019, 1, 1), end=datetime(2019, 5, 1), freq='M')\n\ndf.pivot_table(index=pd.Grouper(key='dttm', freq='M'), columns='flag', fill_value=0).reindex(date_range, axis=0, fill_value=0)\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[29]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead tr th {\n        text-align: left;\n    }\n\n\n  \n    \n      \n      value\n    \n    \n      flag\n      a\n      b\n    \n  \n  \n    \n      2019-01-31\n      1\n      1\n    \n    \n      2019-02-28\n      1\n      0\n    \n    \n      2019-03-31\n      0\n      0\n    \n    \n      2019-04-30\n      0\n      1",
      "tags": "pandas",
      "url": "https://pkonarzewski.github.io/blog/uzupelnianie-brakow-w-zakresie-dat/"
    },
    {
      "title": "Instalowanie nowych kerneli dla Jupytera",
      "text": "Instalowanie IPyhon kernel dla Jupytera:\n\nsource activate .env\npip install ipykernel\npython -m ipykernel install --user --name {{nazwa_kernela}} --display-name \"{{\u0141adna nazwa}}\"",
      "tags": "jupyter",
      "url": "https://pkonarzewski.github.io/blog/instalowanie-ipython-kernel-dla-jupytera/"
    },
    {
      "title": "Sp\u0142aszczanie indeks\u00f3w hierarchicznych (MultiIndex)",
      "text": "Sp\u0142aszczenie indeks\u00f3w hierarchicznych (MultiIndex) w Pandas.\n\n\n\n\n\n\nIn\u00a0[19]:\n\n    \nimport numpy as np\nimport pandas as pd\n\n\narrays = [['group_a', 'group_a', 'group_b', 'group_b', 'group_b', 'group_c'],\n          ['one', 'two', 'one', 'two', 'three', 'one']]\n\ntuples = list(zip(*arrays))\n\ncols = pd.MultiIndex.from_tuples(tuples, names=['first', 'second'])\n\nindex = pd.MultiIndex.from_tuples([('a', 'a'), ('a', 'b'), ('b', 'a')], names=['foo', 'bar'])\n\ndf = pd.DataFrame(np.random.randn(3, 6), index=index, columns=cols)\ndf\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[19]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead tr th {\n        text-align: left;\n    }\n\n    .dataframe thead tr:last-of-type th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      first\n      group_a\n      group_b\n      group_c\n    \n    \n      \n      second\n      one\n      two\n      one\n      two\n      three\n      one\n    \n    \n      foo\n      bar\n      \n      \n      \n      \n      \n      \n    \n  \n  \n    \n      a\n      a\n      -0.836002\n      -1.368972\n      -1.223625\n      1.043264\n      0.947463\n      1.004504\n    \n    \n      b\n      0.669385\n      1.014749\n      -0.754021\n      0.417427\n      0.006548\n      0.529405\n    \n    \n      b\n      a\n      -0.213305\n      1.817328\n      0.756040\n      -0.455419\n      -0.233054\n      0.434982\n    \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\nSp\u0142aszczanie kolumn\u00b6\n\n\n\n\n\nIn\u00a0[15]:\n\n    \ndf.columns = ['_'.join(c) for c in df.columns]\ndf\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[15]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      \n      group_a_one\n      group_a_two\n      group_b_one\n      group_b_two\n      group_b_three\n      group_c_one\n    \n    \n      foo\n      bar\n      \n      \n      \n      \n      \n      \n    \n  \n  \n    \n      a\n      a\n      0.844372\n      -0.420295\n      -2.083568\n      0.283192\n      -0.916388\n      -0.004215\n    \n    \n      b\n      -2.064209\n      0.186708\n      0.820550\n      -1.266257\n      0.882968\n      -1.253361\n    \n    \n      b\n      a\n      0.850927\n      1.105630\n      -1.524011\n      -1.159488\n      0.147265\n      2.205868\n    \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\nSp\u0142aszczanie indeksu\u00b6\n\n\n\n\n\nIn\u00a0[17]:\n\n    \ndf.index = ['_'.join(c) for c in df.index]\ndf\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[17]:\n\n\n\n\n\n\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n\n\n  \n    \n      \n      group_a_one\n      group_a_two\n      group_b_one\n      group_b_two\n      group_b_three\n      group_c_one\n    \n  \n  \n    \n      a_a\n      0.844372\n      -0.420295\n      -2.083568\n      0.283192\n      -0.916388\n      -0.004215\n    \n    \n      a_b\n      -2.064209\n      0.186708\n      0.820550\n      -1.266257\n      0.882968\n      -1.253361\n    \n    \n      b_a\n      0.850927\n      1.105630\n      -1.524011\n      -1.159488\n      0.147265\n      2.205868",
      "tags": "pandas",
      "url": "https://pkonarzewski.github.io/blog/splaszczanie-indeksow-hierarchicznych-multiindex/"
    },
    {
      "title": "Listy i s\u0142owniki sk\u0142adane w Pythonie",
      "text": "Listy sk\u0142adane\u00b6\n\n\n\n\n\n\nPodniesienie element\u00f3w do pot\u0119gi\n\n\n\n\n\n\nIn\u00a0[2]:\n\n    \nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nsqr_numbers = [n**2 for n in numbers]\nsqr_numbers\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[2]:\n\n\n\n\n\n[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n\n\n\n\n\n\n\n\n\n\n\nFiltrowanie element\u00f3w z listy (tylko mniejsze od 5)\n\n\n\n\n\n\nIn\u00a0[5]:\n\n    \nls_then_5 = [n for n in numbers if n < 5]\nls_then_5\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[5]:\n\n\n\n\n\n[1, 2, 3, 4]\n\n\n\n\n\n\n\n\n\n\n\nS\u0142owniki sk\u0142adane\u00b6\n\n\n\n\n\n\nZmiana warto\u015bci na du\u017ce litery\n\n\n\n\n\n\nIn\u00a0[3]:\n\n    \nnames_dict = {0: 'Ala', 1: 'Ewa', 2: 'Marzenka'}\n\nupper_dict = {k: v.upper() for k, v in names_dict.items()}\nupper_dict\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[3]:\n\n\n\n\n\n{0: 'ALA', 1: 'EWA', 2: 'MARZENKA'}\n\n\n\n\n\n\n\n\n\n\n\nZamian miejscami kluczy i warto\u015bci\n\n\n\n\n\n\nIn\u00a0[20]:\n\n    \nrevert_dict = {v: k for k, v in names_dict.items()}\nrevert_dict\n\n\n    \n\n\n\n\n\n\n\n\n\n    Out[20]:\n\n\n\n\n\n{'Ala': 0, 'Ewa': 1, 'Marzenka': 2}",
      "tags": "python-basics",
      "url": "https://pkonarzewski.github.io/blog/listy-i-slowniki-skladane-w-pythonie/"
    },
    {
      "title": "Witajcie",
      "text": "Strona ruszy\u0142a!\nWitaj, na stronie, z za\u0142o\u017cenia ma to by\u0107 moj\u0105 \u015bci\u0105g\u0105, ale mo\u017ce przyda si\u0119 i Tobie :).",
      "tags": "",
      "url": "https://pkonarzewski.github.io/blog/witajcie/"
    },
    {
      "title": "SnippetsBox",
      "text": "ul {\n    list-style-type: square;\n    -webkit-columns: 2;\n    -moz-columns: 2;\n    columns: 2;\n    list-style-position: inside;\n  }\n\n\n\nLista skrawk\u00f3w\n\n\n\n\n\n  \n    GIT\n  \n\n  \n    Core\n    \n      \n\n    \n            Aktualizacja forka repozytorium\n    \n\n\n  \n\n\n\n\n\n  \n    PostgreSQL\n  \n\n  \n    Core\n    \n      \n\n    \n            Znajdywanie i zabijanie kwerend w Postgresie\n    \n\n\n  \n\n\n\n\n\n  \n    Python\n  \n\n  \n    Core\n    \n      \n\n    \n            F-string\n            Listy i s\u0142owniki sk\u0142adane w Pythonie\n    \n\n\n  \n\n  \n    Jupyter\n    \n      \n\n    \n            Instalowanie nowych kerneli dla Jupytera\n    \n\n\n  \n\n  \n    Pandas\n    \n      \n\n    \n            Normalizacja kolumn w Pandas\n            Wy\u015bwietl typ element\u00f3w DataFrame\n            Uzupe\u0142nianie brak\u00f3w w zakresie dat\n            Sp\u0142aszczanie indeks\u00f3w hierarchicznych (MultiIndex)",
      "tags": "",
      "url": "https://pkonarzewski.github.io/"
    },
    {
      "title": "Search",
      "text": "Search results appear here.",
      "tags": "",
      "url": "https://pkonarzewski.github.io/search/"
    }
  ]
};