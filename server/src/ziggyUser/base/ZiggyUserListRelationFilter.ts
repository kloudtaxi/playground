/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ZiggyUserWhereInput } from "./ZiggyUserWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ZiggyUserListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ZiggyUserWhereInput,
  })
  @ValidateNested()
  @Type(() => ZiggyUserWhereInput)
  @IsOptional()
  @Field(() => ZiggyUserWhereInput, {
    nullable: true,
  })
  every?: ZiggyUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => ZiggyUserWhereInput,
  })
  @ValidateNested()
  @Type(() => ZiggyUserWhereInput)
  @IsOptional()
  @Field(() => ZiggyUserWhereInput, {
    nullable: true,
  })
  some?: ZiggyUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => ZiggyUserWhereInput,
  })
  @ValidateNested()
  @Type(() => ZiggyUserWhereInput)
  @IsOptional()
  @Field(() => ZiggyUserWhereInput, {
    nullable: true,
  })
  none?: ZiggyUserWhereInput;
}
export { ZiggyUserListRelationFilter };
