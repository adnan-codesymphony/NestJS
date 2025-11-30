import { Module } from '@nestjs/common';
import { PersonalDetailsController } from './personal-details.controller';
import { PersonalDetailsService } from './personal-details.service';

@Module({
  controllers: [PersonalDetailsController],
  providers: [PersonalDetailsService]
})
export class PersonalDetailsModule {}
