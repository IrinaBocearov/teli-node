import HttpClient from "../../shared/http/http-client";
import ISIPBuilder from "../contracts/sip-builder.interface";
import CreateSipAccountDto from "../models/create-sip-account.dto";
import UpdateSipAccountDto from "../models/update-sip-account.dto";
import SIP from "../models/sip";

const SIPBuilder = (httpClient: HttpClient): ISIPBuilder => {
    return {
        createAccount: function(payload: CreateSipAccountDto): Promise<String> {
            return httpClient.fetch('GET', `https://apiv1.teleapi.net/sipaccounts/create`, payload);
        },
        updateAccount: function(payload: UpdateSipAccountDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/sipaccounts/update', payload);
        },
        listAccount: function(): Promise<Array<SIP>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/sipaccounts/list')
        },
        removeAccount: function (sipaccount_id:number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/sipaccounts/remove',{
                sipaccount_id
            })
        }
    }
}

export default SIPBuilder;