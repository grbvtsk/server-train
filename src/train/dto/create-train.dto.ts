import { IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateTrainDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  departureStation: string;

  @IsString()
  @IsNotEmpty()
  arrivalStation: string;

  @IsDateString()
  @IsNotEmpty()
  departureTime: string;

  @IsDateString()
  @IsNotEmpty()
  arrivalTime: string;

  @IsString()
  @IsNotEmpty()
  platform: string;

  @IsString()
  @IsNotEmpty()
  trainNumber: string;

  @IsString()
  @IsNotEmpty()
  trainType: string;
}
