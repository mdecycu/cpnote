// Japan National Flag
// https://en.wikipedia.org/wiki/Flag_of_Japan
// https://en.wikipedia.org/wiki/Flag_of_Japan#/media/File:Construction_sheet_of_the_Japanese_flag_EN.svg
#include <stdio.h>
#include <gd.h>
#include <math.h>

// Function prototype
void draw_japan_flag(gdImagePtr img);

int main() {
    // width 3: height 2
    int width = 1200;
    // 國旗長寬比為 3:2
    int height = (int)(width * 2.0 / 3.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_japan_flag(img);

    FILE *outputFile = fopen("japan_flag_in_gd_w15.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}

void draw_japan_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, white, black;
    // 紅色圓形位於 width 的 1/2 與 height 的 1/2 處
    int center_x = (int)(width / 2);
    int center_y = (int)(height / 2);
    // 先塗上整片白色
    red = gdImageColorAllocate(img, 255, 00, 25); // 紅色
    white = gdImageColorAllocate(img, 255, 255, 255); // 白色
    black = gdImageColorAllocate(img, 0, 0, 0); // 黑色
    // 根據畫布大小塗上白色長方形區域
    gdImageFilledRectangle(img, 0, 0, width, height, white);
    // 外框畫黑線
    gdImageRectangle(img, 0, 0, width, height, black);
    // 畫中心圓形塗色
    // 直徑為 height 的 3/5
    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖
    gdImageFilledEllipse(img, center_x, center_y, (int)3*height/5, (int)3*height/5, red);
}
