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
    fprintf(gnuplotPipe, "set fontpath 'gnuplot.conf'\n");
    fprintf(gnuplotPipe, "set terminal png font 'default,10' size 800,400\n");
    fprintf(gnuplotPipe, "set output 'hellognuplot.png'\n");
    fprintf(gnuplotPipe, "plot sin(x)");
    // Close popen
    pclose(gnuplotPipe);
  
    return 0;
}