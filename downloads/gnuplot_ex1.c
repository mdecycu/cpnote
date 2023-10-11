// 包含標準輸出入程式庫的標頭文件
// https://blog.csdn.net/weixin_38468077/article/details/101069365
// http://www.gnuplot.info/demo/
// https://github.com/sysprog21/rv32emu
// https://github.com/sysprog21/semu 
// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3
// https://cs61c.org/fa23/
// https://greenteapress.com/wp/think-python-2e/
// cd downloads
// cc gnuplot_ex1.c -o gnuplot_ex1
// ./gnuplot_ex1
#include <stdio.h>
 
// 主函式
int main() {
    // Start a Gnuplot process using popen
    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");
    if (!gnuplotPipe) {
        fprintf(stderr, "Failed to start Gnuplot.\n");
        return 1;
    }
 
    // Use Gnuplot plotting commands, specify font and output as PNG
    fprintf(gnuplotPipe, "set terminal png font 'default,10' size 800,400\n");
    fprintf(gnuplotPipe, "set output './../images/gnuplot_ex1.png'\n");
    fprintf(gnuplotPipe, "plot sin(x)");
    // Close popen
    pclose(gnuplotPipe);
 
    return 0;
}