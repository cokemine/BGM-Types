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
  /**
   * @deprecated
   */
  export type Collection =
    paths['/user/{username}/collection']['get']['responses']['200']['content']['application/json'];
  /**
   * @deprecated
   */
  export type CollectionSubject =
    paths['/user/{username}/collections/{subject_type}']['get']['responses']['200']['content']['application/json'];
  /**
   * @deprecated
   */
  export type CollectionStatus =
    paths['/user/{username}/collections/status']['get']['responses']['200']['content']['application/json'];
  /**
   * @deprecated
   */
  export type CollectionProgress =
    paths['/user/{username}/progress']['get']['responses']['200']['content']['application/json'];

  export type Me = paths['/v0/me']['get']['responses']['200']['content']['application/json'];
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
  export type UserCollection =
    paths['/v0/users/{username}/collections']['get']['responses']['200']['content']['application/json'];
}

export namespace BGMCategory {
  export type Information = paths['/v0/indices/{index_id}']['get']['responses']['200']['content']['application/json'];
  export type Subjects =
    paths['/v0/indices/{index_id}/subjects']['get']['responses']['200']['content']['application/json'];
}

export namespace BGMEditHistory {
  export type Persons = paths['/v0/revisions/persons']['get']['responses']['200']['content']['application/json'];
  export type PersonRevision =
    paths['/v0/revisions/persons/{revision_id}']['get']['responses']['200']['content']['application/json'];

  export type Characters = paths['/v0/revisions/characters']['get']['responses']['200']['content']['application/json'];
  export type CharacterRevision =
    paths['/v0/revisions/characters/{revision_id}']['get']['responses']['200']['content']['application/json'];
  export type Subjects = paths['/v0/revisions/subjects']['get']['responses']['200']['content']['application/json'];
  export type SubjectRevision =
    paths['/v0/revisions/subjects/{revision_id}']['get']['responses']['200']['content']['application/json'];
  export type Episodes = paths['/v0/revisions/episodes']['get']['responses']['200']['content']['application/json'];
  export type EpisodeRevision =
    paths['/v0/revisions/episodes/{revision_id}']['get']['responses']['200']['content']['application/json'];
}
