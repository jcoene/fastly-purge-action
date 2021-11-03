# Fastly Purge

This action sends a request to purge all content for a Fastly service.

## Inputs

### `api_key`

**Required** The API key used to communicate with Fastly.

### `service_id`

**Required** The Fastly Service ID for the service to be purged.

## Outputs

None

## Example usage

uses: jcoene/fastly-purge-action@master
with:
  api_key: "${{ secrets.FASTLY_API_KEY }}"
  service_id: "XzF8SR2rqdS5dQq6D6dz4G"
