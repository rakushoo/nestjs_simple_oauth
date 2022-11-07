import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}

// @Injectable()
// export class FtAppService {
//   ftLogin(req) {
//     if (!req.user) {
//       return 'No user from 42';
//     }

//     return {
//       message: 'User information from 42',
//       user: req.user,
//     };
//   }
// }
