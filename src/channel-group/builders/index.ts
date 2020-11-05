import HttpClient from "../../shared/http/http-client";
import IChannelGroupBuilder from "../contracts/channel-group-builder.interface";
import CreateChannelGroupDto from "../models/create-channel-group.dto";
import UpdateChannelGroupDto from "../models/update-channel-group.dto";
import ChannelGroup from "../models/channel-group";

const ChannelGroupBuilder = (httpClient: HttpClient): IChannelGroupBuilder => {
    return {
        list: function(): Promise<Array<ChannelGroup>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/channelgroups/list')
        },
        get: function(channel_group_id: number): Promise<ChannelGroup> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/channelgroups/get', { channel_group_id })
        },
        create: function(payload: CreateChannelGroupDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/channelgroups/create', payload)
        },
        update: function(channel_group_id: number, payload: UpdateChannelGroupDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/channelgroups/update', {
                channel_group_id,
                ...payload
            })
        },
        remove: function(channel_group_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/channelgroups/remove', { channel_group_id })
        }
    }
}

export default ChannelGroupBuilder;