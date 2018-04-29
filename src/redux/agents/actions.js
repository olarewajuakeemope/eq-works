import { langs as configLangs } from 'config'
import * as t from './actionTypes'

export function getAgent(id, lang){
  return {
    type: t.GET_REQUEST,
    id,
    lang,
  }
}

export function getAgentForm(id, langs = configLangs.agentLanguages){
  return {
    type: t.GET_FORM_REQUEST,
    id,
    langs,
  }
}

export function saveAgentFormBiography(id, { data }){
  return {
    type: t.SAVE_FORM_REQUEST,
    id,
    data,
  }
}

export function saveAgentFormDetails(id, { data }, langs){
  return {
    type: t.SAVE_FORM_REQUEST,
    id,
    data: langs.reduce((obj, lang) => {
      obj[lang] = data
      return obj
    }, {}),
  }
}

export function getOrgs(){
  return {
    type: t.GET_ORGS_REQUEST,
  }
}

export function getOrgAgents(){
  return {
    type: t.ORG_AGENTS_REQUEST,
  }
}

export function updateAgentKycAvailability(id, kyc_availability) {
  return {
    type: t.SAVE_KYC_AVAILABILITY_REQUEST,
    id,
    data: { kyc_availability },
  }
}

export function updateAgentAvailability(id, availability) {
  return {
    type: t.SAVE_AVAILABILITY_REQUEST,
    id,
    data: { availability },
  }
}

export function changeAgentStatus(id, active) {
  return {
    type: t.SAVE_REQUEST,
    id,
    data: { active },
  }
}

export function getAgentReviews(id, lang){
  return {
    type: t.FETCH_REVIEWS_REQUEST,
    id,
    lang,
  }
}

export function createAgent({ name, email, label, description, profile_image_url }) {
  return {
    type: t.CREATE_AGENT_REQUEST,
    email,
    agent: {
      name,
      label,
      description,
      profile_image_url,
    },
  }
}
