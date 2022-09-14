$IndexJs = Get-ChildItem "$PSScriptRoot\index.*.bundle.js"
$AssetId = [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($IndexJs.FullName)

function New-UDScrollProgress {
    <#
    .SYNOPSIS
    Scroll bar to show the scroll progress of the page at the top of the page
    
    .DESCRIPTION
    Scroll bar to show the scroll progress of the page at the top of the page
    
    .PARAMETER Id
    The ID of this editor

    .PARAMETER Color
    Color of the progress bar as a hex string

    .PARAMETER BackgroundColor
    Color of the progress bar background as a hex string

    .PARAMETER Height
    Height of the progress bar

    .EXAMPLE
    New-UDScrollProgress
    #>
    
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Color = "#eb5757",
        [Parameter()]
        [string]$BackgroundColor = "#f2f2f2",
        [Parameter()]
        [string]$Height = "4px"
    )

    End {
        @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "udscrollprogress"
            id       = $Id
            
            color    = $Color
            bgColor  = $BackgroundColor
            height   = $Height
        }
    }
}