import { IsString, IsDateString, IsOptional } from 'class-validator';

export class PatchTrainDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  departureStation?: string;

  @IsOptional()
  @IsString()
  arrivalStation?: string;

  @IsOptional()
  @IsDateString()
  departureTime?: string;

  @IsOptional()
  @IsDateString()
  arrivalTime?: string;

  @IsOptional()
  @IsString()
  platform?: string;

  @IsOptional()
  @IsString()
  trainNumber?: string;

  @IsOptional()
  @IsString()
  trainType?: string;
}
