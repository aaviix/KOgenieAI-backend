import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateLandingPageDataDto {
  @IsNotEmpty()
  @IsString()
  landing_page_first_title: string;

  @IsNotEmpty()
  @IsString()
  landing_page_first_description: string;

  @IsNotEmpty()
  @IsString()
  landing_page_first_btn_text: string;

  @IsNotEmpty()
  @IsNumber()
  landing_page_first_img_url: number;

  @IsNotEmpty()
  @IsString()
  landing_page_hw_first_title: string;

  @IsNotEmpty()
  @IsString()
  landing_page_hw_first_description: string;

  @IsNotEmpty()
  @IsString()
  landing_page_hw_second_title: string;

  @IsNotEmpty()
  @IsString()
  landing_page_hw_second_description: string;

  @IsNotEmpty()
  @IsString()
  landing_page_hw_third_title: string;

  @IsNotEmpty()
  @IsString()
  landing_page_hw_third_description: string;

  @IsNotEmpty()
  @IsString()
  landing_page_feature_first_title: string;

  @IsNotEmpty()
  @IsString()
  landing_page_feature_first_description: string;

  @IsNotEmpty()
  @IsString()
  landing_page_feature_second_title: string;

  @IsNotEmpty()
  @IsString()
  landing_page_feature_second_description: string;

  @IsNotEmpty()
  @IsString()
  landing_page_feature_third_title: string;

  @IsNotEmpty()
  @IsString()
  landing_page_feature_third_description: string;

  @IsNotEmpty()
  @IsString()
  landing_page_feature_fourth_title: string;

  @IsNotEmpty()
  @IsString()
  landing_page_feature_fourth_description: string;
}
