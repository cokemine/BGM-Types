import { paths } from './types';

export namespace BGMPerson {
  export type Information = paths['/v0/persons/{person_id}']['get']['responses']['200']['content']['application/json'];
  export type Subjects =
    paths['/v0/persons/{person_id}/subjects']['get']['responses']['200']['content']['application/json'];
  export type Characters =
    paths['/v0/persons/{person_id}/characters']['get']['responses']['200']['content']['application/json'];
}

export namespace BGMCharacter {
  export type Information =
    paths['/v0/characters/{character_id}']['get']['responses']['200']['content']['application/json'];
  export type Subjects =
    paths['/v0/characters/{character_id}/subjects']['get']['responses']['200']['content']['application/json'];
  export type Persons =
    paths['/v0/characters/{character_id}/persons']['get']['responses']['200']['content']['application/json'];
}

export namespace BGMUser {
  export type Information = paths['/user/{username}']['get']['responses']['200']['content']['application/json'];
  export type Collection =
    paths['/user/{username}/collection']['get']['responses']['200']['content']['application/json'];
  export type CollectionSubject =
    paths['/user/{username}/collections/{subject_type}']['get']['responses']['200']['content']['application/json'];
  export type CollectionStatus =
    paths['/user/{username}/collections/status']['get']['responses']['200']['content']['application/json'];
  export type CollectionProgress =
    paths['/user/{username}/progress']['get']['responses']['200']['content']['application/json'];
}

export namespace BGMSubject {
  export type Information =
    paths['/v0/subjects/{subject_id}']['get']['responses']['200']['content']['application/json'];
  export type Persons =
    paths['/v0/subjects/{subject_id}/persons']['get']['responses']['200']['content']['application/json'];
  export type Characters =
    paths['/v0/subjects/{subject_id}/characters']['get']['responses']['200']['content']['application/json'];
  export type Subjects =
    paths['/v0/subjects/{subject_id}/subjects']['get']['responses']['200']['content']['application/json'];

  export type InformationOld = paths['/subject/{subject_id}']['get']['responses']['200']['content']['application/json'];
  export type Episode = paths['/subject/{subject_id}/ep']['get']['responses']['200']['content']['application/json'];
  export type Calendar = paths['/calendar']['get']['responses']['200']['content']['application/json'];
}

export namespace BGMEpisode {
  export type Episodes = paths['/v0/episodes']['get']['responses']['200']['content']['application/json'];
  export type EpisodeItem =
    paths['/v0/episodes/{episode_id}']['get']['responses']['200']['content']['application/json'];
}

export namespace BGMSearch {
  export type Search = paths['/search/subject/{keywords}']['get']['responses']['200']['content']['application/json'];
}

export namespace BGMProgress {
  export type UpdateEpisode =
    paths['/ep/{id}/status/{status}']['get']['responses']['200']['content']['application/json'];
  export type UpdateEpisodePost =
    paths['/ep/{id}/status/{status}']['post']['responses']['200']['content']['application/json'];
  export type UpdateSubject =
    paths['/subject/{subject_id}/update/watched_eps']['post']['responses']['200']['content']['application/json'];
}

export namespace BGMCollection {
  export type Information = paths['/collection/{subject_id}']['get']['responses']['200']['content']['application/json'];
  export type Update =
    paths['/collection/{subject_id}/{action}']['post']['responses']['200']['content']['application/json'];
}
