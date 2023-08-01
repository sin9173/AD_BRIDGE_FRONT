import { get } from 'http';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export interface ICurrentMember {
    member_id? : number;
    username? : string;
    email? : string;
    name? : string;
    phone? : string;
    role_code? : string;
    role_name? : string;
    token? : string;
}

const {persistAtom} = recoilPersist({
    key : "currentMember",
    storage : localStorage
})

export const currentMemberState = atom<ICurrentMember>({
    key : "currentMember",
    default : {
        member_id : 0,
        email : '',
        role_code : '',
        role_name : '',
        token : ''
    },
    effects_UNSTABLE : [persistAtom]
})

export const currentMemberSelector = selector({
    key : "currentMemberSelector",
    get : ({get}) => {
        return get(currentMemberState)
    }
});
