import { Resolver, Mutation, Arg } from 'type-graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { ROOT_DIR } from 'src/config/conf';

// import { FileUpload } from '../../types/file-upload';

@Resolver()
export class ProfilePictureResolver {
  @Mutation(() => Boolean)
  async addProfilePicture(
    @Arg('picture', () => GraphQLUpload)
    upload: FileUpload
  ): Promise<boolean> {
    console.log('upload', upload);
    const { createReadStream, filename } = upload;

    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`${ROOT_DIR}images/${new Date().getTime()}_${filename}`))
        .on('finish', () => resolve(true))
        .on('close', () => resolve(true))
        .on('error', () => reject(false))
    );
  }
}
