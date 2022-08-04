nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1$ mkdir unix_tests
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1$ ls
README.md  unix_tests
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1$ cd unix_tests/
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ touch trybe.txt
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ cp trybe.txt trybe_backup.txt
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ mv trybe.txt trybe_renamed.txt
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ mkdir backup
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ mv trybe_backup.txt backup/
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ mkdir backup2
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ ls
backup  backup2  trybe_renamed.txt
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ cd backup
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests/backup$ ls
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/blo
co_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests/backup$ mv trybe_backup.txt ../backup2
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests/backup$ cd ..
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ ls
backup  backup2  trybe_renamed.txt
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ rmdir backup/
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ mv backup2/ backup/
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ pwd
/home/nelson/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_wnelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_wnelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_dnelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ rmdir -rf backup/ 
rmdir: opção inválida -- “r”
Tente "rmdir --help" para mais informações.
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ rmdir --help
Uso: rmdir [OPÇÃO]... DIRETÓRIO...
Remove o(s) DIRETÓRIO(s), se estiver(em) vazio(s).

      --ignore-fail-on-non-empty
                  ignora toda falha que ocorrer só por não estar vazio
  -p, --parents   remove DIRETÓRIO e seus ancestrais; ex.: "rmdir -p a/b/c"
                     é similar a "rmdir a/b/c a/b a"
  -v, --verbose   emite um diagnóstico para cada diretório processado
      --help     mostra esta ajuda e sai
      --version  informa a versão e sai

Página de ajuda do GNU coreutils: <https://www.gnu.org/software/coreutils/>
Relate erros de tradução para <https://translationproject.org/team/pt_BR.html>
Documentação completa em <https://www.gnu.org/software/coreutils/rmdir>
ou disponível localmente via: info "(coreutils) rmdir invocation"
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ rmdir --ignore-fail-on-non-empty backup/
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ rm -rf backup/
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ clear
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ ls
skills.txt  trybe_renamed.txt
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ head -5 skills.txt 
Internet
Unix
Bash
HTML
CSS
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ tail -4 skills.txt 
CSS
JavaScript
React
SQL
nelson@nelson-inspiron:~/Documentos/Trybe/mod_01 - fundamentos_desenvolvimento_web/bloco_01 - unix_bash/1.3 - unix_bash_pt.1/unix_tests$ rm *.txt

