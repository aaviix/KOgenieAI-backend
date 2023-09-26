import { Type } from 'class-transformer';
import {
  IS_IN,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import {
  CreativityKeyArray,
  OpenAiToneOfVoiceKeyArray,
} from 'src/shared/constants/array.constants';

export class UpdateOpenAISettingsDto {
  @IsOptional()
  @IsString()
  open_ai_secret: string;

  @IsNotEmpty()
  @IsString()
  open_ai_model: string;

  @IsNotEmpty()
  @IsString()
  open_ai_default_language: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(OpenAiToneOfVoiceKeyArray)
  open_ai_default_tone_of_voice: string;

  // @IsNotEmpty()
  // @IsNumber()
  // @IsIn(CreativityKeyArray)
  // open_ai_default_creativity: number;

  @IsNotEmpty()
  @IsNumber()
  open_ai_default_stream_server: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(2)
  open_ai_temperature: number;

  // @IsNotEmpty()
  // @IsNumber()
  // @Min(0)
  // open_ai_max_input_length: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  open_ai_max_output_length: number;

  // @IsNotEmpty()
  // @IsNumber()
  // @Min(0)
  // open_ai_max_token: number;
}
