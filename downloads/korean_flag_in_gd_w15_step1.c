// https://en.wikipedia.org/wiki/Flag_of_South_Korea
// https://en.wikipedia.org/wiki/Flag_of_South_Korea#/media/File:Flag_of_South_Korea_(construction_sheet).svg
#include <stdio.h>
#include <gd.h>
#include <math.h>

// Function prototype
void draw_korean_flag(gdImagePtr img);

int main() {
    // width 3: height 2
    int width = 1200;
    // 國旗長寬比為 72:48 = 12:8 = 3:2
    int height = (int)(width * 2.0 / 3.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_korean_flag(img);

    FILE *outputFile = fopen("korean_flag_in_gd_w15_step1.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}

void draw_korean_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, blue, black, grey, white;
    // according to https://en.wikipedia.org/wiki/Flag_of_South_Korea#/media/File:Flag_of_South_Korea_(construction_sheet).svg
    double scale = width/72;
    int big_circle_dia = (int)24*scale;
    int small_circle_dia = (int) big_circle_dia/2;
    double rot_ang = atan2(48.0, 72.0);
    int center_x = (int)(width / 2);
    int center_y = (int)(height / 2);
    printf("small_circle_dia is %d\n", small_circle_dia);
    int left_center_x = center_x - (small_circle_dia/2)*cos(rot_ang);
    printf("center_x is %d\n", center_x);
    printf("atan2(48.0, 72.0) is %f\n", atan2(48.0, 72.0));
    printf("left_center_x is %d\n", left_center_x);
    int left_center_y = center_y - (small_circle_dia/2)*sin(rot_ang);
    int right_center_x = center_x + (small_circle_dia/2)*cos(rot_ang);
    int right_center_y = center_y + (small_circle_dia/2)*sin(rot_ang);

    red = gdImageColorAllocate(img, 255, 0, 0);      // Red
    blue = gdImageColorAllocate(img, 0, 0, 255);     // Blue
    black = gdImageColorAllocate(img, 0, 0, 0);      // Black
    grey = gdImageColorAllocate(img, 125, 125, 125); // grey
    white = gdImageColorAllocate(img, 255, 255, 255); // white

    gdImageFilledRectangle(img, 0, 0, width, height, white);
    gdImageRectangle(img, 0, 0, width, height, black);

    // Draw the big circle outline
    int circle_radius = (int)(height * 2.0 / 5.0);
    gdImageEllipse(img, center_x, center_y, big_circle_dia, big_circle_dia, black);
    // left small circle
    gdImageEllipse(img, left_center_x, left_center_y, small_circle_dia, small_circle_dia, red);
    // right small circle
    gdImageEllipse(img, right_center_x, right_center_y, small_circle_dia, small_circle_dia, blue);
}
