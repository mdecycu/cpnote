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
    fprintf(gnuplotPipe, "set terminal png font './edukai-4.0.ttf' 14 size 800,400\n");
    fprintf(gnuplotPipe, "set title '互動式工程繪圖'\n");
    fprintf(gnuplotPipe, "set output 'hellognuplot.png'\n");
    fprintf(gnuplotPipe, "plot sin(x)");
    // Close popen
    pclose(gnuplotPipe);
  
    return 0;
}