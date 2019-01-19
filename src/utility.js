import {Environment} from './configurations/environment';
import wretch from "wretch"

export const ApiRequest = wretch()
  .url(`${Environment.MW_END_POINT_URL}/gvs/api/`).headers(new Headers(
    {"Content-Type": "application/json",
     "Accept":"application/json"}
 ));
  