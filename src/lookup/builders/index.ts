import HttpClient from "../../shared/http/http-client";
import ILookupBuilder from "../contracts/lookup-builder.interface";
import CNAMLookup from "../models/cnam-lookup";
import Ownership from "../models/ownership";

const LookupBuilder = (httpClient: HttpClient): ILookupBuilder => {
    return {
        ownership: function(number: number): Promise<Ownership> {
            return httpClient.fetch('GET', 'https://lrn.teleapi.net/lookup', {
                number
            })
        },
        CNAM: function (number: number): Promise<CNAMLookup> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/dids/cnam/lookup', {
                number
            })
        }
    }
}

export default LookupBuilder;