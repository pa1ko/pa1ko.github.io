<!--
.. title: Znajdywanie i zabijanie kwerend w Postgresie
.. slug: znajdywanie-zabijanie-kwerend-postgres
.. date: 2020-10-16 22:09:41 UTC+02:00
.. tags: postgres
.. category: snippet
.. link:
.. description:
.. type: text
-->

Znajdywanie aktywnych kwerend:

`SELECT * FROM pg_stat_activity WHERE state = 'active';`

Mając PID z poprzedniej kwerendy, możemy zabić kwerendę:

`SELECT pg_cancel_backend(PID);`

Powyższa operacja może chwilę potrwać, jeżeli chcemy to zrobić brutalnie to:

`SELECT pg_terminate_backend(PID);`
