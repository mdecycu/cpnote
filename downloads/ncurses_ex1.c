// replit.nix needs pkgs.ncurses.dev
// cc ncurses_ex1.c -o a.out -lncurses
#include <curses.h>
#include <string.h>

int main()
{
    char str[80];

    initscr();
    cbreak();
    echo();

    mvprintw(10, 10, "2+3=%s", str);

    getstr(str);

    if (strcmp("5", str) == 0)
        mvprintw(11, 10, "Correct\n");
    else
        mvprintw(11, 10, "Wrong\n");

    mvprintw(12, 10, "press any key to quit...");
    getch();
    endwin();
    return 0;
}