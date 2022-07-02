/* tslint:disable */
/* eslint-disable */
/**
 * Saas Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { V1Gender } from './v1-gender';

/**
 * 
 * @export
 * @interface V1UpdateUser
 */
export interface V1UpdateUser {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUser
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUser
     */
    'username'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUser
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUser
     */
    'phone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUser
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUser
     */
    'birthday'?: string | null;
    /**
     * 
     * @type {V1Gender}
     * @memberof V1UpdateUser
     */
    'gender'?: V1Gender;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUser
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUser
     */
    'confirmPassword'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUser
     */
    'avatar'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1UpdateUser
     */
    'rolesId'?: Array<string>;
}
