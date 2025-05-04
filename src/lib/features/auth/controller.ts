import { db } from '$lib/db';
import type { AccountData } from './schema';

export namespace AuthDAO {
  export function findUserByEmail(email: string) {
    return db.from('account').select('*').eq('email', email).maybeSingle();
  }

  export function createUser(dataObject: AccountData) {
    return db.from('account').insert({
      email: dataObject.email,
      name: dataObject.name,
      password: dataObject.password
    }).select('*').single();
  }

  export function incrementRefreshTokenVersion(email: string) {
    return db.rpc('increment_refresh_token_version', { in_email: email });
  }
}