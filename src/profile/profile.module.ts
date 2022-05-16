import { FollowEntity } from '@app/profile/follow.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from '@app/profile/profile.service';
import { ProfileController } from '@app/profile/profile.controller';
import { Module } from '@nestjs/common';
import { UserEntity } from '@app/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FollowEntity])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
