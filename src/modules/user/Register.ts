import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql';

import { User } from '../../entity/User';

@Resolver(User)
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return 'Hello Worldy';
  }

  @FieldResolver()
  async name(@Root() parent: User) {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Mutation(() => User)
  async register(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const user = Object.assign(new User(), {
      id: new Date().getTime(),
      firstName,
      lastName,
      email,
      password: password,
    });

    return user;
  }
}
