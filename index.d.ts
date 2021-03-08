import {paths} from './types/api';

export namespace BGMUser {
    export type Information = paths["/user/{username}"]["get"]["responses"]["200"]["content"]["application/json"];
    export type Collection = paths["/user/{username}/collection"]["get"]["responses"]["200"]["content"]["application/json"];
    export type CollectionSubject = paths["/user/{username}/collections/{subject_type}"]["get"]["responses"]["200"]["content"]["application/json"];
    export type CollectionStatus = paths["/user/{username}/collections/status"]["get"]["responses"]["200"]["content"]["application/json"];
    export type CollectionProgress = paths["/user/{username}/progress"]["get"]["responses"]["200"]["content"]["application/json"];
}

export namespace BGMSubject {
    export type Information = paths["/subject/{subject_id}"]["get"]["responses"]["200"]["content"]["application/json"];
    export type Episode = paths["/subject/{subject_id}/ep"]["get"]["responses"]["200"]["content"]["application/json"];
    export type Calendar = paths["/calendar"]["get"]["responses"]["200"]["content"]["application/json"];
}

export namespace BGMSearch {
    export type Search = paths["/search/subject/{keywords}"]["get"]["responses"]["200"]["content"]["application/json"];
}

export namespace BGMProgress {
    export type UpdateEpisode = paths["/ep/{id}/status/{status}"]["get"]["responses"]["200"]["content"]["application/json"];
    export type UpdateEpisodePost = paths["/ep/{id}/status/{status}"]["post"]["responses"]["200"]["content"]["application/json"];
    export type UpdateSubject = paths["/subject/{subject_id}/update/watched_eps"]["post"]["responses"]["200"]["content"]["application/json"];
}

export namespace BGMCollection {
    export type Information = paths["/collection/{subject_id}"]["get"]["responses"]["200"]["content"]["application/json"];
    export type Update = paths["/collection/{subject_id}/{action}"]["post"]["responses"]["200"]["content"]["application/json"];
}
