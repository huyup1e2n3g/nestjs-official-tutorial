import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  // readonly name?: string;
  // readonly brand?: string;
  // readonly flavor?: string[];
}

// What the PartialType function is doing for us is returning the type of the class we passed into it, with all of the properties set to optional.
// PartialType not only marks, all the fields is optional, but it also inherits all the validation rules applied via decorators, as well as adds a single additional validation rule to each field the @IsOptional() rule.
